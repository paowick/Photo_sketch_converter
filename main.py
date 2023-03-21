import cv2 
import sys

def main(argv):
    img = cv2.imread(str(argv[0]),1)
    paramcheck(str(argv[0]))
    img_gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img_invert = cv2.bitwise_not(img_gray)
    img_smoothing = cv2.GaussianBlur(img_invert,(21,21),sigmaX=0,sigmaY=0)


    def dodgeV2(x,y):
        return cv2.divide(x,255-y,scale=256)
    final_img = dodgeV2(img_gray,img_smoothing)

    
    cv2.imshow("final", final_img)
    cv2.waitKey(0)


def paramcheck(param):
    text = """
    hio
    
    """
    if(param == None):
        print(text)
if __name__ == "__main__":
   main(sys.argv[1:])