#include <stdio.h>

int main()
{
  int i,sum=0,count=0,num=1;
  while(num){
    scanf("%d",&i);
    if(0 != i){
      sum += i;
      count += 1;
    }else break;
  }
  printf("%d,%d\n",sum,count);
  return 0;
}
