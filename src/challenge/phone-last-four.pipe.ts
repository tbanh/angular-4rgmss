import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: any[], searchQuery: string): any[] {
    if (!searchQuery || searchQuery.trim() === '') {
      return users;
    }

    searchQuery = searchQuery.toLowerCase();

    return users.filter((user) => {
      const firstName = user.firstName.toLowerCase();
      const lastName = user.lastName.toLowerCase();

      return firstName.includes(searchQuery) || lastName.includes(searchQuery);
    });
  }
}