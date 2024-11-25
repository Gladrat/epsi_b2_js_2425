from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/products', methods=['GET'])
def get_products():
    products = ["Product 01", "Product 02", "Product 03", "TV full-hd", "Coucou-depuis-BDD"]
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)

# pip install flask
# pip install flask-cors