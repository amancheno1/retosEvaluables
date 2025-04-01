import { Professional } from "./Professional";


export const actor = new Professional("Antonio", 30, 70, 170, false, "Argentina", 1, "Actor");
export const director = new Professional("Jose", 45, 80, 175, false, "UK", 4, "Director");
export const actress = new Professional("Paula", 28, 54, 160, false, "Española", 2, "Actress");
export const writer = new Professional("Louis", 68, 85, 190, true, "Frances", 0, "Writer");
export const producer = new Professional("Maria", 37, 50, 162, false, "Italiana", 0, "Producer");

actor.showProfessional();
actress.showProfessional();
director.showProfessional();
writer.showProfessional();
producer.showProfessional();