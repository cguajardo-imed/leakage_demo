import base64
import json

# Create JWT header
header = {"alg": "HS256", "typ": "JWT"}

# Use your specified payload
payload = {"sub": "1234567890", "name": "John Doe", "admin": True}


# Encode header and payload
def encode_part(part):
    json_str = json.dumps(part).encode()
    return base64.urlsafe_b64encode(json_str).decode().rstrip("=")


encoded_header = encode_part(header)
encoded_payload = encode_part(payload)

# For a fake token, we can use a dummy signature
dummy_signature = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

# Create the JWT token
jwt_token = f"{encoded_header}.{encoded_payload}.{dummy_signature}"

print(jwt_token)
