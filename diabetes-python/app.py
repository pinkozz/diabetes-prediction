# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.linear_model import Perceptron
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.utils import shuffle
from sklearn.datasets import load_diabetes
import numpy as np

app = Flask(__name__)
CORS(app)

clf = Perceptron(max_iter=100, random_state=42)


def train():
    try:
        # Load the diabetes dataset
        print("loading The dataset")
        diabetes = load_diabetes()
        X, y = shuffle(diabetes.data, diabetes.target, random_state=42)
        X = StandardScaler().fit_transform(X)
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        print(diabetes)

        # Train the perceptron model
        print("Train the perceptron model")
        clf.fit(X_train, (y_train > 140).astype(int))
    except Exception as e:
        return jsonify({'error': str(e)})


@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the request
        data = request.get_json()

        # Convert the feature values to a NumPy array
        features = np.array([
            data['age'],
            1 if data['sex'].lower() == 'male' else 0,  # Assuming 1 for male, 0 for female
            data['bmi'],
            data['bp'],
            data['s1'],
            data['s2'],
            data['s3'],
            data['s4'],
            data['s5'],
            data['s6'],
        ], dtype=float)

        # Make the prediction
        prediction = int(clf.predict([features])[0])

        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    train()
    app.run(debug=True)