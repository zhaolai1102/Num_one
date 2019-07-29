#include <stdio.h>

void change(int *a, int *b)
{
  int c=*a;
  *a=*b;
  *b=c;
}

int main()
{
  int a=5,b=3;
  change(&a,&b);
  printf("%d,%d\n",a,b);
  return 0;
}
