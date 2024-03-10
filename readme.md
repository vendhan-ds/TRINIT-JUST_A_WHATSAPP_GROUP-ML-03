# REMOTE SENSING

## Features:

1. Image uploading, wherein the model analyzes and describes entities within the uploaded image.
2. Seamless image snapping from an embedded map, wherein the model analyzes and describes entities within the snapped zone.
3. Acheived a one-gram Bleu score of 0.59 and 0.47 for valid and test data respectively. (Refer the bottom of the main jupyter notebook to check the scores)

## Architecture:

The image inputs are fed into the Inception v3 Network, whose logits are fed into the Transformer

# Jupyter and BLEU score.

    - You can go to the folder 'notebooks and bleu scor' where we have the main notebook, which was used to train and test the model
    - You will have 'valid.csv' this contains the predictions that out model 'EPOCH_V4.h5' has done on valid.csv of the rscid dataset
    - Similarly you will have 'test.csv' which is done on test dataset of the rscid dataset

# Application

    - Make sure you have python and pip installed
    - To install the dependencies `pip install -m requirements.txt`
    - If there is any module not found error. `pip install <module-name>`
    - Now run `python app.py` or `python <path to app.py>` to start the application.
    - Go to http://localhost:5000 to access the application.
    
# Model Drive Link
https://drive.google.com/drive/folders/164QOOVQ5ylOM1OJtz7j3Qwk8tGCr805f?usp=sharing
 
    - Place the Model1.h5 and Model2.h5 in the root folder, these will be used by the application to generate captions 
    - Model_latest.h5 is the latest model that was trained and tested. The bleu scores obtained are 0.59 for valid.csv, 0.47 for test.csv. 

# PPT Link 

https://www.canva.com/design/DAF_ELVzaSI/sWfTWU4cVzJ6lmXu3i3vDw/edit?utm_content=DAF_ELVzaSI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

    - Refer the PPT for more insight into our solution

# Demo Link 
https://drive.google.com/drive/folders/13zd4M_MpmA3jupfCbdzu3zFM0i6QnyZ3?usp=sharing

    - This is the video link for the demo
