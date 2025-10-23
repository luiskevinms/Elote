import random
class Suerte:

    def __init__(self, numero, numero2, numero3):
        self.numero = numero
        self.numero2 = numero2
        self.numero3 = numero3
    
    def is_onetohundred(self) -> bool:
        
        #Si el numero que escoja el usuario del 1 al 100 coincide con el random devuelve true 
        numrandom = random.randint(1,100)
        numero = int(self.numero)
        numero2 = int(self.numero2)
        numero3 = int(self.numero3)

        
        if ((numero or numero2 or numero3) > 1 and (numero or numero2 or numero3) < 100):
            return False
        if (numero or numero2 or numero3) == numrandom:
             return True
        else:
            return False
        
        
        
                       
          
