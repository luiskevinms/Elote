class Palindrome:

    def __init__(self, phrase):
        self.phrase = phrase

    def is_palindrome(self) -> bool:
        p = self.phrase
        
        #Si es palindromo retorno True
        #Y si no, retorna False

        frase = p.replace(" ", "").lower()

        for i in range(len(frase)):
                       
            if frase[i] != frase[len(frase) - 1 - i]:
                return False
        
        return True
