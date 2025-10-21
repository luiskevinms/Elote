class Animal:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    @classmethod
    def get_list(cls):
        animals = [
            cls("Jirafa", "Naranja"),
            cls("Cebra", "Blanco y Negro"),
            cls("Xenomorfo", "Negro"),
            cls("Leon", "Amarillo"),
            cls("Perico", "Verde"),
            cls("Mariposa", "Negra y Naranja"),
            cls("Foca", "Gris")
        ]
        return animals
        