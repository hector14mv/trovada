// Transcribed from the supplied HORARIOS AULA 2627.pdf.
// Consecutive half-hour instrument lessons are grouped; the PDF remains authoritative.
export type Lesson = { name: string; start?: string; end?: string; note?: string; kind?: 'ensemble' | 'early' };
export type Day = { name: string; rooms: Lesson[][] };
export const days: Day[] = [
 {name:'Lunes',rooms:[
  [{name:'Clarinete',start:'17:30',end:'18:30',note:'2 clases de 30 min'},{name:'Prebanda',start:'18:30',end:'19:30',kind:'ensemble'},{name:'Banda',start:'19:30',end:'21:30',kind:'ensemble'}],
  [{name:'Koalas',start:'17:30',end:'18:30',kind:'early'}],
  [{name:'Saxofón',start:'17:00',end:'22:00',note:'10 clases de 30 min'}]
 ]},
 {name:'Martes',rooms:[
  [{name:'Lenguaje musical 1',start:'17:30',end:'18:15'},{name:'Lenguaje musical 2',start:'18:15',end:'19:00'},{name:'Lenguaje musical 3',start:'19:00',end:'19:45'},{name:'Big Band',start:'20:30',end:'22:00',kind:'ensemble'}],
  [{name:'Flauta + IGN',note:'Franja anterior a las 17:30. Inicio pendiente de confirmar: el PDF no delimita este bloque.'},{name:'Flauta',start:'17:30',end:'19:00',note:'3 clases de 30 min'},{name:'Ignacio',start:'19:00',end:'19:30'},{name:'Flauta',start:'19:30',end:'20:30',note:'2 clases de 30 min'}],
  [{name:'Clarinete',start:'17:30',end:'22:00',note:'9 clases de 30 min'}]
 ]},
 {name:'Miércoles',rooms:[
  [{name:'Percusión',start:'19:00',end:'21:00',note:'4 clases de 30 min'}],[],
  [{name:'Trompeta',start:'16:30',end:'21:30',note:'10 clases de 30 min'}]
 ]},
 {name:'Jueves',rooms:[
  [{name:'Bebés',start:'16:45',end:'17:30',kind:'early'},{name:'Trombón',start:'17:30',end:'20:00',note:'5 clases de 30 min'},{name:'Coro',start:'20:00',end:'22:00',kind:'ensemble'}],[],[]
 ]},
 {name:'Viernes',rooms:[[],[],[]]}
];
export const rooms=['Sala grande','Sala mediana','Sala pequeña'];
