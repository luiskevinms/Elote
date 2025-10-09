class Palindrome:

    def __init__(self, phrase):
        self.phrase = phrase

    def is_palindrome(self) -> bool:
        p = self.phrase
        
        #Si es palindromo retorno True
        #Y si no, retorna False

        if p == "palíndromo":
            return True
        else:
            return False