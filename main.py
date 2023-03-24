import cv2 
import sys

def main(argv):
    img = cv2.imread(str(argv[0]),1)
    img_gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    img_invert = cv2.bitwise_not(img_gray)
    img_smoothing = cv2.GaussianBlur(img_invert,(21,21),sigmaX=0,sigmaY=0)


    def dodgeV2(x,y):
        return cv2.divide(x,255-y,scale=256)
    final_img = dodgeV2(img_gray,img_smoothing)

    reFinlImg = cv2.resize(final_img,[500,500])
    cv2.imshow("final", reFinlImg)
    cv2.waitKey(0)


if __name__ == "__main__":
   main(sys.argv[1:])