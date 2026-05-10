import json, base64, os

r = json.load(open('/tmp/img_response2.json'))
msg = r['choices'][0]['message']

if 'images' in msg:
    for img in msg['images']:
        url = img['image_url'].get('url', '')
        if url.startswith('data:image'):
            header, data = url.split(',', 1)
            ext = header.split(';')[0].split('/')[1]
            os.makedirs('public/images', exist_ok=True)
            fpath = f'public/images/hero-portrait.{ext}'
            with open(fpath, 'wb') as f:
                f.write(base64.b64decode(data))
            size = os.path.getsize(fpath)
            print(f'Saved {fpath} ({size} bytes)')
else:
    print('No images found')