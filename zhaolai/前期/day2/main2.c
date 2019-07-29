#include <stdio.h>

int main()
{
    fprintf(stdout,"please input a num:\n");
    int a;
    fscanf(stdin,"%d",&a);
    if(a<0){
        fprintf(stderr,"num must > 0\n");
        return 1;
    }
    return 0;
}
