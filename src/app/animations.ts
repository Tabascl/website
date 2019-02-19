import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
} from '@angular/animations';
import { isAbsolute } from 'path';

export const slideAnimation = trigger('slideAnimation', [
    transition('* <=> *', [
        query(
            ':enter, :leave',
            [style({ position: 'absolute', width: '100%' })],
            { optional: true }
        ),
        group([
            query(
                ':leave',
                [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))],
                { optional: true }
            )
        ])
    ])
]);