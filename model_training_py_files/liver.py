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
from sklearn.utils import resample
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
df3 = pd.read_csv('../input/indian-liver-patient-records/indian_liver_patient.csv')#give the input data path

#FILLING UP THE NaN VALUES 
median = df3["Albumin_and_Globulin_Ratio"].median()
df3["Albumin_and_Globulin_Ratio"]=df3["Albumin_and_Globulin_Ratio"].fillna(median)

#LABEL_ENCODING
label_encoder = LabelEncoder()
diag = ["Dataset","Gender"]
for i in diag:
    df3[i]=label_encoder.fit_transform(df3[i])

# Split data on majority and minority.. minority is dataset == 2
minority = df3[df3.Dataset==1]
majority = df3[df3.Dataset==0]

print('Minority size:', minority.shape)
print('Majority size:', majority.shape)


# choosing upsample as even now we do not have too much data
minority_upsample = resample(minority, replace=True, n_samples=majority.shape[0])
print('Minority upsampled size:', minority_upsample.shape)

# merge majority with upsampled minority
df3 = pd.concat([minority_upsample, majority], axis=0)


#SPLIT
x_train,x_val,y_train,y_val = split(df3,"Dataset")

#MODEL BUILDING
liver_model = model(x_train.shape[1])

#MODL FIT
liver_model.fit(x_train,y_train,epochs=200, batch_size=20, verbose=1)

#CONVERT TO TFJS
tfjs.converters.save_keras_model(liver_model, 'model_liver')

#ACC 
print(get_acc(liver_model,x_val,y_val))



























