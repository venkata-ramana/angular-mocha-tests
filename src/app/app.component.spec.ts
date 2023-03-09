import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Service } from '../app/service';
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;

describe('AppComponent', () => {
  var app: AppComponent | null = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        Service
      ]
    }).compileComponents();
    let service = TestBed.inject(Service);
    app = new AppComponent(service);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).to.be.ok;
  });

  it('Promise Array', () => {
    app?.getData((promise) => {
      assert.isArray(promise);
      expect(promise).to.have.lengthOf(4);
    });
  });

  it('Chai Spy', () => {
    var spy = chai.spy(app?.callOnSpy);
    spy();
    expect(spy).to.have.been.called().once;
  });
});
