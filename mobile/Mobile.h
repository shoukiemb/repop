#include "library.h"

class Mob
{
    protected:
        string mobileBrand;
        string mobileModel;
        double mobilePrice;
    
    public:
        string getMobileBrand();
        string getMobileModel();
        double getMobilePrice();
        
        void setMobileBrand(string brand);
        void setMobileModel(string model);
        void setMobilePrice(double price);


}
