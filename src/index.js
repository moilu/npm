const norrisJK = [
    'Chuck Norris puede matar dos tiros de un pájaro.',
    'Hay 1424 cosas en una habitación promedio con las que Chuck Norris podría matarte. Incluyendo la habitación en sí.',
    'Chuck Norris no duerme. Espera.',
    'Chuck Norris no lee el periódico, lo estudia.',
    'Chuck Norris no juega a nada, lo gana.',
    'No existe la teoría de la evolución, tan sólo una lista de las especies que Chuck Norris permite vivir.',
    'Chuck Norris borró la papelera de reciclaje.',
    'Una vez una cobra mordió a Chuck Norris en una pierna. Después de cinco días de agónico dolor, la cobra murió.',
    'Chuck Norris no sale de caza por que implica posibilidad de fallar. Chuck Norris sale a matar.',
    'Una vez acusaron a Chuck Norris de intento de asesinato. Por supuesto quedó libre, ya que Chuck Norris no lo intenta, te asesina.',
    'Chuck Norris ganó un concurso sobre permanecer debajo del agua y ganó. Cabe destacar que su contrincante era pez.',
    'Una vez Chuck Norris apostó algo con Superman. El perdedor debía de llevar los calzoncillos por fuera el resto de su vida.',
    'Chuck Norris puede no saber dónde vives, pero siempre sabe donde vas a morir.',
    'Se especuló que Chuck Norris tuvo contactos con Frank Miller para interpretar a Leónidas en la adaptación a la gran pantalla del cómic 300. El título de la película habría sido UNO.',
    'Chuck Norris no necesita cortinas. Nadie se atreve a mirar por las ventanas de su casa.',
    'Chuck no conoce el miedo; no ha tenido ese placer.',
    'Una vez Chuck Norris hizo una piedra tan grande que ni él podía moverla. Y la movió.',
    'Chuck Norris no envejece, no le ve utilidad.',
    'Bruce Lee fue el único que esquivó una patada giratoria de Chuck Norris. Poco después murió de arrepentimiento.',
    'Los científicos no erradicaron la Viruela... fue Chuck Norris que miró feo al Virus.',
    'En Texas es ilegal que Chuck Norris use botas, una ley sobre ocultar armas...',
    'Había un 2º Disneylandia en EEUU, después de la visita de Chuck Norris se le conoce como Silent Hill.',
    'Hay un orden en el universo: Espacio, tiempo y Chuck Norris... estaba bromeando... Chuck Norris es el primero.',
    'El que escribía el punto anterior murió por escribir mal el nombre de Chuck.',
    'La mayoría de la gente tiene 23 pares de cromosomas. Chuck Norris tiene 72... y todos venenosos.',
    'Si buscas en Google "Chuck Norris siendo apaleado" te da 0 resultados, simplemente no puede suceder.',
    'Chuck Norris inventó la cuchara porque matar gente con un cuchillo era demasiado fácil.',
    'La Primera Ley de la Termodinámica afirma que la energía ni se crea ni se destruye, excepto si se encuentra con Chuck Norris.',
];

const norrisJoke = () => {

    const joke = norrisJK[Math.floor(Math.random() * norrisJK.length )];
    console.log(joke);
};

module.exports = { norrisJoke };

