class Money:
    def __init__(self, pesos):
        self.pesos = pesos

    def is_money(self) -> float:
        try:
            pesos_float = float(self.pesos)
            dolares = pesos_float / 19.0  # Suponiendo una tasa de cambio fija de 19 pesos por dólar
            return round(dolares, 2)  # Retorna el valor en dólares redondeado a 2 decimales
        except ValueError:
            return "Entrada inválida. Por favor ingrese un número válido."