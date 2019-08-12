#include <stdio.h>
#include "max.c"
#include "min.c"



int main()
{
    int a1=33;
    int a2=21;
    int maxnum=max(a1,a2);
    int minnum=min(a1,a2);
    printf("the max value is %d\nthe min value is %d\n",maxnum,minnum);
    return 0;
}
