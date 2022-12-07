import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "alreadyfinished",
})

export class AlreadyFinishedPipe implements PipeTransform {
    transform(value: boolean): string{
        return value ? "Yes" : "No";
    }
}