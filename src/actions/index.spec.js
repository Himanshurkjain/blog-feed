import * as actions from './index'

describe('actions', () => {
    it('should return comment added as payload', () => {
        const payload = 'comment added';
        const expectedAction = {
            type: actions.POST_COMMENT,
            payload
        }
        expect(actions.postComment(payload)).toEqual(expectedAction)
    })
})