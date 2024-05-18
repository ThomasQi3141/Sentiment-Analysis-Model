import re
from nltk.corpus import stopwords
stopwords_list = set(stopwords.words('english'))
    
# Custom preprocess function
class CustomPreprocess():

    def __init__(self):
        pass

    def preprocess_text(self,sen):
        sen = sen.lower()
        
        # Remove html tags
        TAG_RE = re.compile(r'<[^>]+>')
        sentence = TAG_RE.sub('', sen)

        # Remove punctuations and numbers
        sentence = re.sub('[^a-zA-Z]', ' ', sentence)
        
        # Remove single characters
        sentence = re.sub(r"\s+[a-zA-Z]\s+", ' ', sentence)
        
        # Remove multiple spaces
        sentence = re.sub(r'\s+', ' ', sentence)
        
        # Remove Stopwords
        pattern = re.compile(r'\b(' + r'|'.join(stopwords_list) + r')\b\s*')
        sentence = pattern.sub('', sentence)
        
        return sentence