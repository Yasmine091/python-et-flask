from flask import (
    Blueprint, make_response, send_from_directory
)

from main import app

bp = Blueprint('pwa', __name__, url_prefix='')


@bp.route('/manifest.json')
def manifest():
    return app.send_from_directory('pwa', 'manifest.json')


@bp.route('/sw.js')
def service_worker():
    response = app.make_response(app.send_from_directory('pwa', 'sw.js'))
    response.headers['Cache-Control'] = 'no-cache'
    return response