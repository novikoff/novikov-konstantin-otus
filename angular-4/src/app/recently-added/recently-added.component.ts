import { Component, OnInit } from '@angular/core';

import {debounce, map, tap, switchMap, finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {InsertWordsService} from '../insert-words.service';
import { StorageService } from '../storage.service';
import {ISettings, IStorageArr, IStorageWord } from '../interfaces';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {
  form: FormGroup;
  public words: Observable<Array<any>>;

constructor(
            private modalService: NgbModal,
            public myStorageService: StorageService,
            public myInsertWordsService: InsertWordsService){}
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      newWord: new FormControl('')
    });
  }


  submit() {
    this.myInsertWordsService.insertWord(this.form.controls.newWord.value.trim()).subscribe(data => {
      this.form.reset();
    });
  }
}
