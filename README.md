# Sentiment Analysis Model

### Test out the model using the live deployment <a href="https://prod.d3ibf1d7tocu08.amplifyapp.com/" target=”_blank”>here</a>!

### Read the paper on the model <a href="https://docs.google.com/document/d/18bQrFfXe2t3NsTEKBmQuXB14lA2m48HP3802NjvZMHQ/edit?usp=sharing" target=”_blank”>here</a>

## Abstract

The project aims to explore a real-world application of natural language processing and deep learning - sentiment analysis. It strives to accurately analyze the sentiment of given reviews accurately, while being lightweight enough for real-time predictions and commerical use. It uses a locally-trained convolutional neural network (CNN) to perform binary classification given a certain review (dataset can be found <a href="https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews" target=”_blank”>here</a>). Leveraging techniques such as GloVe word embeddings, the final model was able to achieve a training and testing accuracy of 98.7% and 87.6%. 

I created a full-stack app using React and Flask to make it easier to get predictions from the model. The back-end is deployed using nginx and gunicorn on an AWS EC2 instance, while the front-end is deployed using AWS Amplify. 

### Tools/Technologies Used:
<ul>
  <li><a href="https://www.tensorflow.org/">TensorFlow</a></li>
  <li><a href="https://keras.io/">Keras</a></li>
  <li><a href="https://scikit-learn.org/stable/">Scikit-Learn</a></li>
  <li><a href="https://react.dev/">React.js</a></li>
  <li><a href="https://flask.palletsprojects.com/en/3.0.x/">Flask</a></li>
  <li><a href="https://numpy.org/">NumPy</a></li>
  <li><a href="https://pandas.pydata.org/">Pandas</a></li>
  <li><a href="https://nginx.org/en/">nginx</a></li>
  <li><a href="https://gunicorn.org/">Gunicorn</a></li>
  <li><a href="https://aws.amazon.com/ec2/">AWS EC2</a></li>
  <li><a href="https://aws.amazon.com/amplify" target="_blank">AWS Amplify</a></li>
</ul>


## Files
`model.ipynb`: The Jupyter Notebook containing the code used to train the model <br />
`/model/`: The folder containing the code for the model and the preprocessing function <br />
`/client/`: The React front-end for the full-stack app <br />
`/server/`: The Flask back-end for the full-stack app <br />
`requirements.txt`: The packages required to run the code to train the model<br />

## To-Use
Although the final model was too big to upload to github, you can install the prerequisites using `requirements.txt` and locally train the model using the code from `/model`, saving it as a `.h2` file. 

### Installation:

1. Clone the repo
   ```sh
   git clone https://github.com/ThomasQi3141/Sentiment-Analysis-Model
   ```
2. Install required packages
   ```sh
   $ pip install -r requirements.txt
   ```
3. Run the code in `model.ipynb`

