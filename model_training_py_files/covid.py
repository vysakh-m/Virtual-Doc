from tensorflow.keras import backend as K
from tensorflow.keras.preprocessing.image import ImageDataGenerator,load_img, img_to_array
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.layers import Conv2D, MaxPooling2D,GlobalAveragePooling2D
from tensorflow.keras.layers import Activation, Dropout, BatchNormalization, Flatten, Dense, AvgPool2D,MaxPool2D
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input
from tensorflow.keras.optimizers import Adam, SGD, RMSprop
import tensorflow as tf 
from tensorflow.keras.preprocessing import image
import glob
import cv2


#######################CONFIG_ONLY########################################

#SETTING UP SOME CONFIG
warnings.filterwarnings("ignore")
pd.pandas.set_option('display.max_columns',None)
pd.pandas.set_option('display.max_rows',None)

#CHECKING TF VERSIONS
print("tf version : {}".format(tf.__version__)) #IN MY CASE ITS 2.3+
print("tfjs version : {}".format(tfjs.__version__)) #IN MY CASE ITS 2.7.0

#SEEDING EVERYTHING
def seed_everything(seed):
    np.random.seed(seed)
    tf.random.set_seed(seed)
    os.environ['PYTHONHASHSEED'] = str(seed)
    os.environ['TF_DETERMINISTIC_OPS'] = '1'
    os.environ['TF_KERAS'] = '1'

SEED = 42
seed_everything(SEED)


IMG_W = 150
IMG_H = 150
CHANNELS = 3

INPUT_SHAPE = (IMG_W, IMG_H, CHANNELS)
NB_CLASSES = 2
EPOCHS = 35
BATCH_SIZE = 40


#######################CONFIG_ONLY########################################


# IMAGE DIRACTORY
DATASET_DIR = "/kaggle/input/covid19-radiography-database/COVID-19 Radiography Database"


# SAPARATING NORMAL IMAGES
normal_images = []
count = 0

for img_path in glob.glob(DATASET_DIR + "/NORMAL/*"):
    count += 1
    normal_images.append(image.load_img(str(img_path), target_size = (150,150,3)))
    if count >= 213:
        break
 
#SAPARATING COVID IMAGES
covid_images = []
for img_path in glob.glob(DATASET_DIR + "/COVID-19/*"): 
    covid_images.append(image.load_img(str(img_path), target_size = (150,150,3)))


# CREATING THE TRAINING DATA AND TESTING DATA WITH THE DATA LABELS/TRAGETS
images_together = []
for i in normal_images:
    images_together.append(img_to_array(i))
    
for i in covid_images:
    images_together.append(img_to_array(i))
    
targets = np.zeros(len(images_together))
targets[:len(normal_images)-1] = 1

targets = np.array(targets)
print("targets: ",targets.shape)
targets = targets.reshape(-1,1)
print("new shape of targets: ",targets.shape)


images_together = np.array(images_together)
print("shape of images together: ",images_together.shape)


# TRAIN TEST SPLIT
from sklearn.model_selection import train_test_split
X_train, X_val, y_train, y_val = train_test_split(images_together, targets, test_size=0.25, stratify=targets)

# images_together = np.concatenate((X_train, X_val))
# targets = np.concatenate((y_train, y_val))



model = Sequential()
model.add(Conv2D(filters = 32, kernel_size = (3,3), input_shape = INPUT_SHAPE, activation = "relu"))
model.add(MaxPool2D(pool_size = (2,2)))

model.add(Conv2D(filters = 48, kernel_size = (3,3), activation = "relu"))
model.add(MaxPool2D(pool_size = (2,2)))

model.add(Conv2D(filters = 64, kernel_size = (3,3), activation = "relu"))
model.add(MaxPool2D(pool_size = (2,2), strides = (1,1)))
model.add(Dropout(0.25))

#fully connected
model.add(Flatten())
model.add(Dense(32, activation = "relu"))
model.add(Dropout(0.2))
model.add(Dense(1, activation = "sigmoid"))

# compile 
model.compile(loss = "binary_crossentropy",
             optimizer = "rmsprop",
             metrics = ["accuracy"])

# this is for data aug and helps to feed the data to the model on the fly
train_datagen = ImageDataGenerator(rescale = 1./255,
                                  shear_range = 0.2,
                                  zoom_range = 0.2,
                                  horizontal_flip = True,
                                  validation_split = 0.25)

# data generators for training and validation 
train_generator = train_datagen.flow(
X_train, y_train,
batch_size = BATCH_SIZE,
subset = "training")

validation_generator = train_datagen.flow(
X_val, y_val,
batch_size = BATCH_SIZE,
shuffle = False,
subset = "validation")

#fitting the data to the model
hist = model.fit_generator(
train_generator,
steps_per_epoch = (450*0.75)//BATCH_SIZE,
validation_data = validation_generator,
validation_steps = (450*0.25)// BATCH_SIZE,
epochs = EPOCHS)


# prining the accurecy
print("Training Accuracy: "+str(np.round(hist.history["accuracy"][-1]*100,2))+"%")
print("Validation Accuracy: "+str(np.round(hist.history["val_accuracy"][-1]*100,2))+"%")










