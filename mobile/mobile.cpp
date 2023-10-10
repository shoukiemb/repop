#include "Mobile.h"

void Mob::setMobileBrand(string brand){
    this->mobileBrand = brand;
}
void Mob::setMobileModel(string model){
    this->mobileModel = model;
}
void Mob::setMobilePrice(double price){
    this->mobilePrice = price;
}

string Mob::getMobileBrand(){
    return mobileBrand;
}
string Mob::getMobileModel(){
    return mobileModel;
}
double Mob::getMobilePrice(){
    return mobilePrice;
}