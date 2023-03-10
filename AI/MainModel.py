import tensorflow as tf
import pandas as pd
import numpy as np
import tensorflowjs as tfjs

trainDataset = pd.read_csv('Data/trustWorthy-database.csv', names = ['id', 'entity', 'year', 'records', 'type', 'method']).head(10)
testDataset = pd.read_csv('Data/trustWorthy-database(Test).csv', names = ['id', 'entity', 'year', 'records', 'type', 'method'])

types = pd.Series(['Orphanage','Hospital','Bank','Supermarket','Hardware Store','School','Shooting Range','Kindergarden','Government','Non-Profit''Train Station''Small Business''Local Shop''Pizzeria''Sandwitch Shop''Burget Franchaise'])

methods = pd.Series(['Malware','DoS Attack','Worm Virus','DDoS Attack','Phishing','Spoofing','Identity-Based Attack','Code Injections Attack','Supply chain Attack','Insider Attack','Man In The Middle Attack','SQL Injection Attack','Zero-Day Exploit Attack','DNS Tunneling Attack','51% Attack','Business Email Compromise Attack','Cryptojacking Attack','Drive-by Attack','Cross-site Scripting Attack'])

t = trainDataset['type'].apply(lambda x: types.isin([x]).astype(int))
o = trainDataset['method'].apply(lambda x: methods.isin([x]).astype(int))
t = t.to_numpy()
t = tf.convert_to_tensor(t)
t = tf.reshape(t, [-1, 16])
o = o.to_numpy()
o = tf.convert_to_tensor(o)
o = tf.reshape(o, [-1, 19])

print(o)
print(type(o[0]))
print(o.shape)

model = tf.keras.models.Sequential([
    tf.keras.layers.Input(16, batch_size=10),
    tf.keras.layers.Dense(20, activation='relu'),
    tf.keras.layers.Dense(25, activation='relu'),
    tf.keras.layers.Dense(19)
])

loss = tf.keras.losses.SparseCategoricalCrossentropy(from_logits = False)

model.compile(optimizer='adam', 
              loss=loss, 
              metrics=['accuracy']
              )

print([print(i.shape, i.dtype) for i in model.inputs])
print([print(o.shape, o.dtype) for o in model.outputs])

model.fit(t, o, epochs=5)