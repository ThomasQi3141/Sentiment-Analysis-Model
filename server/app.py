# Imports for the app
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

# Imports for the model
import pandas as pd
import numpy as np
from keras.models import load_model
import io
import json
from keras_preprocessing.text import tokenizer_from_json
from preprocessing_function import CustomPreprocess
from keras_preprocessing.sequence import pad_sequences

# Load model and Tokenizer
pretrained_model = load_model('saved_model/model_acc_0.876.h5')

with open('tokenizer.json') as f:
    data = json.load(f)
    loaded_tokenizer = tokenizer_from_json(data)

# Import text preprocessing function
custom = CustomPreprocess()


# Flask app
app = Flask(__name__)
CORS(app) # Enable CORS

@app.route('/', methods=['POST'])
def predict():
    # Get data
    data = [str(x) for x in request.form.values()]
    
    # Preprocess text
    for i in range(len(data)):
        data[i] = custom.preprocess_text(data[i])
    
    # Tokenize text
    data = loaded_tokenizer.texts_to_sequences(data)
    
    # Pad text
    data_padded = pad_sequences(data, padding='post', maxlen=100)
    
    # Predict using pretrained model
    predictions = pretrained_model.predict(data_padded)
    
    predicted_sentiment = 'N/A'
    
    if (predictions[0][0] >= 0.5):
        predicted_sentiment = 'Positive'
    else:
        predicted_sentiment = 'Negative'
    
    return jsonify({'prediction': predicted_sentiment})

if __name__ == '__main__':
    app.run()