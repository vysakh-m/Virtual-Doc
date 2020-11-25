#IMPORTING LIBRARIES
import numpy as np 
import pandas as pd
import os
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from statistics import mean
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
df = pd.read_csv('data/diabetes.csv')

#SPLIT
x_train,x_val,y_train,y_val = split(df,"Outcome")

#MODEL BUILDING
diab_model = model(x_train.shape[1])

#MODL FIT
diab_model.fit(x_train,y_train,epochs=200, batch_size=20, verbose=1)

#CONVERT TO TFJS
tfjs.converters.save_keras_model(diab_model, 'models_diabetes')

#ACC 
print(get_acc(diab_model,x_val,y_val))



























