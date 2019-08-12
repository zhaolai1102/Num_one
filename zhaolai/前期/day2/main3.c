#include <stdio.h>

int main()
{
  int a,b;
  printf("input int a:\n");
  scanf("%d",&a);
  printf("input int b:\n");
  scanf("%d",&b);
  if(0==b){
    fprintf(stderr,"b can not be 0!\n");
    return 1;
  }else{
    printf("%d/%d=%d\n",a,b,a/b);
    return 0;
  }

}

