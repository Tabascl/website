import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [style({ position: 'absolute', top: 0, left: 0, width: '100%' })],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ left: '110%' })],
            { optional: true }
        ),
        group([
            query(
                ':leave',
                [animate('300ms ease-out', style({ left: '-110%' }))],
                { optional: true }
            ),
            query(
                ':enter',
                [animate('300ms ease-out', style({ left: '0%' }))],
                { optional: true }
            )
        ])
    ])
]);