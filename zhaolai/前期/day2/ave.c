#include <stdio.h>

int main()
{
  int a,b;
  scanf("%d,%d",&a,&b);
  if(b!=0){
    float c = a/b;
    printf("average is %f\n",c);
    return 0;
  }else{
    fprintf(stderr,"b can't be 0!");
    return 1;
  }
}
