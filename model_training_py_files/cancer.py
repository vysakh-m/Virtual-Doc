#IMPORTING LIBRARIES
import numpy as np 
import pandas as pd
import os
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from statistics import mean
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
import seaborn as sns
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
from scipy import stats
import random
from matplotlib import rcParams
import re
import matplotlib.pyplot as plt
import seaborn as sns
import tensorflow as tf
import tensorflowjs as tfjs
from tensorflow.keras import models, regularizers
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from main_module import get_acc,model,split  #IMPORTING FROM main_module.py
import warnings

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

#######################CONFIG_ONLY########################################




#IMPORT DATA
df = pd.read_csv('data/cancer.csv')


#LABEL ENCODING
label_encoder = LabelEncoder()
diag = ["diagnosis"]
for i in diag:
    df[i]=label_encoder.fit_transform(df[i])


#SELECTED FEATURES(LOOK INTO THE NOTEBOOK TO KNOW HOW THE GOT SELECTED) 
fs1 = ['diagnosis', 'radius_mean', 'texture_mean', 'perimeter_mean',
       'area_mean', 'smoothness_mean', 'compactness_mean', 'concavity_mean',
       'concave points_mean', 'symmetry_mean',
       'radius_se', 'perimeter_se', 'area_se',
       'compactness_se', 'concavity_se', 'concave points_se', 
       'radius_worst', 'texture_worst',
       'perimeter_worst', 'area_worst', 'smoothness_worst',
       'compactness_worst', 'concavity_worst', 'concave points_worst',
       'symmetry_worst', 'fractal_dimension_worst']


df_fs1 = df[fs1]




#SPLIT
x_train,x_val,y_train,y_val = split(df_fs1,"diagnosis")

#MODEL BUILDING
cancer_model = model(x_train.shape[1])

#MODL FIT
cancer_model.fit(x_train,y_train,epochs=200, batch_size=20, verbose=1)

#CONVERT TO TFJS
tfjs.converters.save_keras_model(cancer_model, 'models_cancer')

#ACC 
print(get_acc(cancer_model,x_val,y_val))



























