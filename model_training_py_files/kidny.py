import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib as mpl
import missingno as msno 
from sklearn.impute import KNNImputer

from sklearn.model_selection import train_test_split
from sklearn.model_selection import StratifiedKFold
from sklearn.preprocessing import LabelEncoder

import warnings
import os
from scipy.stats import randint 

import tensorflow as tf
import tensorflowjs as tfjs
from sklearn.metrics import accuracy_score
from tensorflow.keras import models, regularizers
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from main_module import get_acc,model,split  #IMPORTING FROM main_module.py




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



#reading the data
ckd_df = pd.read_csv("data/kidney_disease.csv")


# renaming the columns
col_dict={"bp":"blood_pressure",
          "sg":"specific_gravity",
          "al":"albumin",
          "su":"sugar",
          "rbc":"red_blood_cells",
          "pc":"pus_cell",
          "pcc":"pus_cell_clumps",
          "ba":"bacteria",
          "bgr":"blood_glucose_random",
          "bu":"blood_urea",
          "sc":"serum_creatinine",
          "sod":"sodium",
          "pot":"potassium",
          "hemo":"hemoglobin",
          "pcv":"packed_cell_volume",
          "wc":"white_blood_cell_count",
          "rc":"red_blood_cell_count",
          "htn":"hypertension",
          "dm":"diabetes_mellitus",
          "cad":"coronary_artery_disease",
          "appet":"appetite",
          "pe":"pedal_edema",
          "ane":"anemia"}

ckd_df.rename(columns=col_dict, inplace=True)


#renaming the values of columns (look into the notebook to know more)
ckd_df['diabetes_mellitus'] =ckd_df['diabetes_mellitus'].replace(to_replace={'\tno':'no','\tyes':'yes',' yes':'yes'})
ckd_df['coronary_artery_disease'] = ckd_df['coronary_artery_disease'].replace(to_replace='\tno',value='no')
ckd_df['white_blood_cell_count'] = ckd_df['white_blood_cell_count'].replace(to_replace='\t8400',value='8400')
ckd_df.classification=ckd_df.classification.replace("ckd\t","ckd")
ckd_df["white_blood_cell_count"]=ckd_df["white_blood_cell_count"].replace("\t?", np.nan)
ckd_df["red_blood_cell_count"]=ckd_df["red_blood_cell_count"].replace("\t?", np.nan)
ckd_df['diabetes_mellitus'] = ckd_df['diabetes_mellitus'].replace(to_replace={'\tno':'no','\tyes':'yes',' yes':'yes'})
ckd_df['coronary_artery_disease'] = ckd_df['coronary_artery_disease'].replace(to_replace='\tno',value='no')
ckd_df['white_blood_cell_count'] = ckd_df['white_blood_cell_count'].replace(to_replace='\t8400',value='8400')
ckd_df["packed_cell_volume"]= ckd_df["packed_cell_volume"].replace("\t?", np.nan)


#changing data type of some columns
lists = ["red_blood_cells","pus_cell","pus_cell_clumps","bacteria","hypertension","diabetes_mellitus","coronary_artery_disease","pedal_edema","anemia","appetite"]
for string_column in lists: 
  ckd_df[string_column]=ckd_df[string_column].astype(str)


# this is a new technique that i found to map string type inputs to munerical type
ckd_df['red_blood_cells']=ckd_df['red_blood_cells'].replace({'normal':1,'abnormal':0})
ckd_df['pus_cell']=ckd_df['pus_cell'].replace({'normal':1,'abnormal':0})
ckd_df['pus_cell_clumps']=ckd_df['pus_cell_clumps'].replace({'notpresent':0,'present':1})
ckd_df['bacteria']=ckd_df['bacteria'].replace({'notpresent':0,'present':1})
ckd_df['hypertension']=ckd_df['hypertension'].replace({'no':0,'yes':1})
ckd_df['diabetes_mellitus']=ckd_df['diabetes_mellitus'].replace({'no':0,'yes':1})
ckd_df['coronary_artery_disease']=ckd_df['coronary_artery_disease'].replace({'no':0,'yes':1})
ckd_df['pedal_edema']=ckd_df['pedal_edema'].replace({'no':0,'yes':1})
ckd_df['anemia']=ckd_df['anemia'].replace({'no':0,'yes':1})
ckd_df['appetite']=ckd_df['appetite'].replace({'poor':0,'good':1})

# Filling up the issing values using knn
imputer = KNNImputer(n_neighbors=5, weights='uniform', metric='nan_euclidean')
impute_columns=list(set(ckd_df.columns)-set(["classification"]))
imputer.fit(ckd_df[impute_columns])

# creating the training data
X_trans=pd.DataFrame(imputer.transform(ckd_df[impute_columns]), columns=impute_columns)
x=X_trans[X_trans["id"].isin(ckd_df["id"])].drop(["id"],axis=1)

#label encoding the target
label_encoder = LabelEncoder()
diag = ["classification"]
for i in diag:
    ckd_df[i]=label_encoder.fit_transform(ckd_df[i])

y=ckd_df["classification"]


#train test split
x_train,x_val,y_train,y_val = train_test_split(x,y,test_size = 0.08,random_state = SEED)


#MODEL BUILDING
kidny_model = model(x_train.shape[1])

#MODL FIT
kidny_model.fit(x_train,y_train,epochs=200, batch_size=20, verbose=1)

#CONVERT TO TFJS
tfjs.converters.save_keras_model(kidny_model, 'models_kidny')

#ACC 
print(get_acc(kidny_model,x_val,y_val))
































