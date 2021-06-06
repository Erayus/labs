import json
import boto3
import uuid
import os

TABLE_NAME = os.environ['TABLE_NAME']
PRIMARY_KEY = os.environ['PRIMARY_KEY']


dynamodb = boto3.resource('dynamodb')


def handler(event, context):
    if not event["body"]:
        return {
            'statusCode': 400, 
            'body': 'invalid request, you are missing the parameter body' 
        }

    if  isinstance(event["body"], dict):
        car = event["body"]
    else:
        car = json.loads(event["body"])

    car[PRIMARY_KEY] = str(uuid.uuid4())
    table = dynamodb.Table(TABLE_NAME)

    try:
        response = table.put_item(
            Item = car
        )
        return {
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'statusCode': 201, 
            'body': "Car Successfully Created"
        }
    except Exception as e:
        print(e)
        raise e