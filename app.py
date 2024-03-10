from model import get_caption_model, generate_caption
from flask import Flask, request, jsonify,render_template,Blueprint
from PIL import Image
import numpy as np
from flask import Flask, flash, request, redirect, url_for, session
import base64
from io import BytesIO
from PIL import Image

app = Flask(__name__, static_folder="./frontend1/dist", static_url_path="/")
app.config['SECRET_KEY'] = "sdfd"


@app.route("/upload")
def file_upload():
    return app.send_static_file('index2.html')

@app.route("/")
def landing():
    return app.send_static_file('index2.html')

@app.route("/live")
def map():
    return app.send_static_file('index.html')   

@app.route('/upload', methods=['POST'])
def upload():
    data = request.get_json()
    file = data["image"]
    starter = file.find(',')
    image_data = file[starter+1:]
    image_data = bytes(image_data, encoding="ascii")
    im = Image.open(BytesIO(base64.b64decode(image_data)))
    im.save('image.png')
    image = "./image.png"
    model = "Model1.h5"
    pred_caption3 = get_caption_model(image,model)
    pred_caption3 = pred_caption3.replace("seaside resort","residential area")
    return jsonify({"caption_V3" : pred_caption3})

@app.route('/upload2', methods=['POST'])
def upload2():
    data = request.get_json()
    file = data["image"]
    starter = file.find(',')
    image_data = file[starter+1:]
    image_data = bytes(image_data, encoding="ascii")
    im = Image.open(BytesIO(base64.b64decode(image_data)))
    im.save('image.png')
    image = "./image.png"
    model = "Model2.h5"
    pred_caption3 = get_caption_model(image,model)
    pred_caption3 = pred_caption3.replace("seaside resort","residential area")
    return jsonify({"caption_V3" : pred_caption3})


# @app.route('/caption/<img>')
# def predict(img):
#     global model
#     print(img)
#     image = "./" + img
#     model = "Epoch_2.h5"
#     pred_caption = get_caption_model(image,model)
#     model = "Epoch_5.h5"
#     pred_caption1 = get_caption_model(image,model)
#     model = "Epoch_OverFit.h5"
#     pred_caption2 = get_caption_model(image,model)
#     return jsonify({"caption_V2": pred_caption, "caption_V1" : pred_caption1, "caption_OverFit" : pred_caption2})   

if __name__ == "__main__":
    app.run(debug=True) 