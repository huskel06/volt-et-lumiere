import json, base64, os

r = json.load(open('/tmp/img_response.json'))
msg = r['choices'][0]['message']
print('Keys:', list(msg.keys()))

if 'images' in msg:
    print('Images count:', len(msg['images']))
    for i, img in enumerate(msg['images']):
        print(f'Image {i} keys:', list(img.keys()))
        if 'image_url' in img:
            url = img['image_url'].get('url', '')
            print(f'URL starts with: {url[:80]}')
            print(f'URL length: {len(url)}')
            
            if url.startswith('data:image'):
                header, data = url.split(',', 1)
                ext = header.split(';')[0].split('/')[1]
                print(f'Format: {ext}')
                
                os.makedirs('public/images', exist_ok=True)
                fpath = f'public/images/hero-bg.{ext}'
                with open(fpath, 'wb') as f:
                    f.write(base64.b64decode(data))
                size = os.path.getsize(fpath)
                print(f'Saved {fpath} ({size} bytes)')
else:
    print('No images key found in message')
    print('Full message:', json.dumps(msg, indent=2)[:500])