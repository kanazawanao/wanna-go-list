export class Place {
  id = '';
  userId = '';
  place = '';
  prefecture = '';
  addr = '';
  went = false;
  price = 0;
  category: string[] = [];
  open?: Date;
  close?: Date;
}
