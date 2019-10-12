#include <iostream>

int main() {
  int inc = 0,Tc = 0;
  while(Tc<1000){
    if(Tc % 3 == 0 || Tc % 5 == 0){
      inc += Tc;
    }
    Tc++;
  }
  std::cout << inc;
}