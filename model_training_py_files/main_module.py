#IMPORTING LIBRARIES
print('Loading packages...')
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
import warnings
#SETTING UP SOME CONFIG
warnings.filterwarnings("ignore")
SEED = 42


def model(inp_dim):
    model = models.Sequential()
    model.add(Dense(30,input_dim=inp_dim,activation='relu'))  # Adding input layer of 30 Neurons and 15 inputs
    model.add(Dense(15,activation='relu'))               # Adding 1 hidden layer of 15 Neurons
    model.add(Dropout(0.3))                              # Adding droupout layer to overcome overfitting
    model.add(Dense(5,activation='relu'))                # Adding 1 hidden layer of 3 Neurons
    model.add(Dense(1,activation='sigmoid'))             # Output layer of 1 neuron of sigmoid type
    model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
    return model


def split(df,target):
    data = df.copy()
    y = data[target]
    x = data.drop([target],axis=1)
    x_train,x_val,y_train,y_val = train_test_split(x,y,test_size = 0.1,random_state = SEED)
    return x_train,x_val,y_train,y_val




def get_acc(model,x_val,y_val):
    prc = model.predict(x_val)
    # round predictions
    prc = [round(x[0]) for x in prc]
    acc = accuracy_score(y_val,prc)*100
    return acc

















