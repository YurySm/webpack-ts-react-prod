import { NodePath, PluginItem } from '@babel/core';

export default function(): PluginItem {
    return {
        visitor: {
            Program(path: NodePath, state) {
                const props = state.opts.props;

                path.traverse({
                    JSXIdentifier(current: any) {
                        const nodeName = current.node.name;

                        if(props.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    }
                })
            }
        },
    };
}