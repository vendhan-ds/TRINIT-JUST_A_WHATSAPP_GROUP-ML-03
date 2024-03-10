# REMOTE SENSING

## Features:

1. Image uploading, wherein the model analyzes and describes entities within the uploaded image.
2. Seamless image snapping from an embedded map, wherein the model analyzes and describes entities within the snapped zone.

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
