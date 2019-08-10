#include <stdio.h>

int main(int argv, char* argc[])
{
    printf("argv is %d\n",argv);
    int a;
    for(a=0;a<argv;a++){
        printf("argc[%d] is %s\n",a,argc[a]);
    }
    return 0;
}
