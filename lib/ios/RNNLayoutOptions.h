#import "RNNInsetsOptions.h"
#import "RNNOptions.h"
@interface RNNLayoutOptions : RNNOptions

@property(nonatomic, strong) Color *backgroundColor;
@property(nonatomic, strong) Color *componentBackgroundColor;
@property(nonatomic, strong) TextL *direction;
@property(nonatomic, strong) id orientation;
@property(nonatomic, strong) Bool *autoHideHomeIndicator;
@property(nonatomic, strong) RNNInsetsOptions *insets;

- (UIInterfaceOrientationMask)supportedOrientations;

@end
