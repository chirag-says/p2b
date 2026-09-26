import sys
from PIL import Image
# usage: sbs.py out a b [scale]
out,a,b=sys.argv[1:4]; sc=float(sys.argv[4]) if len(sys.argv)>4 else 0.5
A=Image.open(a); B=Image.open(b)
w=int(A.size[0]*sc); h=int(A.size[1]*sc)
s=Image.new('RGB',(w*2+10,h),'red')
s.paste(A.resize((w,h)),(0,0)); s.paste(B.resize((w,int(B.size[1]*sc))),(w+10,0))
s.save(out)
