import json, base64, sys, os
from PIL import Image

r = json.load(open('/tmp/img_response5.json'))
msg = r['choices'][0]['message']
images = msg.get('images', [])
print('Number of images:', len(images), flush=True)

if images:
    url = images[0]['image_url']['url']
    b64 = url.split(',')[1]
    data = base64.b64decode(b64)
    print('Decoded bytes:', len(data), flush=True)
    with open('/tmp/img_raw5.png', 'wb') as f:
        f.write(data)
    
    img = Image.open('/tmp/img_raw5.png')
    print('Image size:', img.size, 'Mode:', img.mode, flush=True)
    img.save('public/images/service-3.webp', 'WebP', quality=82, method=6)
    size = os.path.getsize('public/images/service-3.webp')
    print('WebP saved:', size, 'bytes', flush=True)
    os.remove('/tmp/img_raw5.png')
else:
    print('No images found', flush=True)