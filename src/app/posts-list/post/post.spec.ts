/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs/observable/of';

import { PostComponent } from './post.component';
import { PostService } from './post.service';

describe('PostComponent', function() {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let de: DebugElement;
    let service: PostService;
    let spy: jasmine.Spy;

    const activatedRouteStub = {
        snapshot: {
            params: {
                postId: 1
            }
        }
    };

    const postMockResponse = {
        id: 1,
        title: 'Blog post #1',
        author: 'Melissa Manges',
        publish_date: '2016-02-23',
        slug: 'blog-post-1',
        description: 'Utroque denique invenire et has.',
        content: '<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PostComponent ],
            imports: [ HttpClientTestingModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                PostService,
                { provide: ActivatedRoute, useValue: activatedRouteStub },
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        service = fixture.debugElement.injector.get(PostService);
    });

    afterEach(() => {
        component = null;
        service = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have an h2 tag of `Post`', () => {
        spy = spyOn(service, 'getPost').and.returnValue(of(postMockResponse));
        component.ngOnInit();
        fixture.detectChanges();
        expect(de.query(By.css('h2')).nativeElement.innerText).toContain('Post');
    });

    it('getPost() should get a post', () => {
        spy = spyOn(service, 'getPost').and.returnValue(of(postMockResponse));
        component.ngOnInit();
        fixture.detectChanges();
        expect(service.getPost).toHaveBeenCalled();
    });
});
