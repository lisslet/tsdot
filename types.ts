export type Partial<T> = {
    [P in keyof T] ?: T[P];
};

export type Readonly<T> = {
    readonly [P in keyof T] : T[P];
}

export type Dictionary<T> = {
    [P in keyof T]: T[P];
}

export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

export type Difference<T, U> = T extends U ? never : T;

export type Filter<T, U> = T extends U ? T : number;


type TypeProperty<T, U extends keyof T> = T[U];

interface A {
    label: 'a';
    items: '1' | '2';
}

interface B {
    label: 'b';
    items: '3' | '4';
}



// type LabelSelector<T extends any, U extends T['label'], V extends {type: T['label']}> = V extends {type: U} ? U : never;
//
//
// class Test<T extends any,
//     ITEM = TypeProperty<T, 'items'>> {
//
//
//     test<LABEL extends TypeProperty<T, 'label'>,
//         B = LabelSelector<T, LABEL>
//         >(name: LABEL, item: B);
//     test(name, item) {
//
//     }
//
//
// }
//
// const test = new Test<A | B>();
//
// test.test('a', );
//

/*type Actions =
    | {
    type: 'campaignCreated';
    code: string;
}
    | {
    type: 'campaignEnded';
    amount: number;
};

type ActionSelector<T extends Actions['type'], U extends {type: Actions['type']}> =
    U extends {type: T} ? U : never;

type A1 = ActionSelector<'campaignCreated', Actions>

type ActionMap = {[t in Actions['type']]: ActionSelector<t, Actions>};

function test(a: ActionMap){

}*/

test({});